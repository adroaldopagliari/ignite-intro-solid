import { Request, Response } from 'express';
import { IncomingHttpHeaders } from 'http';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

interface ICustomHeader {
  user_id: string;
}

interface IReqCustom<THeader> extends Request {
  headers: IncomingHttpHeaders & THeader;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: IReqCustom<ICustomHeader>, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).json(users);
    } catch (err) {
      return response.status(400).json({ err: err.message });
    }
  }
}

export { ListAllUsersController };
