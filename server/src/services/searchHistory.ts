import { ISearchHistory } from '../../../types/modelTypes';
import SearchHistory from '../models/SearchHistory';

const create = async (history: ISearchHistory): Promise<SearchHistory> => {
  const newUser = await SearchHistory.create(history);
  return newUser;
};

const findAll = async (userId: string): Promise<ISearchHistory[]> => {
  const histories = (await SearchHistory.findAll({
    where: {
      userId,
    },
  })) as ISearchHistory[];
  return histories;
};

const deleteSearchHistory = async (id: string): Promise<number | null> => {
  const removedHistory = await SearchHistory.destroy({
    where: {
      id,
    },
  });
  return removedHistory;
};

export default { create, findAll, deleteSearchHistory };
