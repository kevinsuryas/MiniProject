// Handle Request & Response
import { Request, Response, NextFunction } from 'express';
import prisma from '../connection';
import { hashPassword, hashMatch } from '../utils/hashPassword';
import { jwtCreate } from '../utils/jwt';
import { transporterNodemailer } from '../utils/transportMailer';
import fs from 'fs';
import Handlebars from 'handlebars';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { email, username, password, role } = req.body;

    if (!email || !username || !password || !role)
      throw { message: 'Data Not Complete!' };

    const hashedPassword: string = await hashPassword(password);

    const createUser = await prisma.users.create({
      data: {
        email,
        username,
        password: hashedPassword,
        role: 'ORGANIZER',
      },
    });

    const token = await jwtCreate({ id: createUser.id, role: createUser.role });

    const template = fs.readFileSync('src/TemplateOrganizer.html', 'utf-8');

    let compiledTemplate: any = await Handlebars.compile(template);
    compiledTemplate = compiledTemplate({ username, token });

    await transporterNodemailer.sendMail({
      from: 'masdefry20@gmail.com',
      to: email,
      subject: 'Welcome!',
      html: compiledTemplate,
    });

    res.status(200).send({
      error: false,
      message: 'Register Success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { usernameOrEmail, password } = req.body;

    const users = await prisma.users.findFirst({
      where: {
        OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      },
    });

    if (users === null) throw { message: 'Username or Email Not Found' };

    const isCompare = await hashMatch(password, users.password);

    if (isCompare === false) throw { message: 'Password Doesnt Match' };

    const token = await jwtCreate({ id: users.id, role: users.role });

    res.status(200).send({
      error: false,
      message: 'Login Success',
      data: {
        username: users.username,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const verifiedAccount = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {

  
  const decodetoken = (req as any).payload;

  try {
    await prisma.users.update({
      where: {
        id: decodetoken.id,
      },
      data: {
        verified: 1,
      },

      
    });


    console.log (">>>>>>>>>")
    res.status(200).send({
      error: false,
      message: 'Verified Success',
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};
