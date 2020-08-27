import { IUser } from '../../../types/modelTypes';
import User from '../models/User';

const create = async (user: IUser): Promise<IUser> => {
  const newUser = await User.create(user);
  return newUser;
};

const find = async (id: number): Promise<IUser | null> => {
  const user = await User.findByPk(id);
  return user;
};

export default { create, find };
