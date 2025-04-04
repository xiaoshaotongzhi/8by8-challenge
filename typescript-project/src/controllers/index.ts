
import { Request, Response } from 'express';
/**
 * The IndexController handles the main routes of the application.
 */
export class IndexController {
  /**
   * Handles the root route (`/`).
   * @param req The HTTP request object.
   * @param res The HTTP response object.
   */
  public home(req: Request, res: Response): void {
    res.send('Welcome to the API!');
  }

  /**
   * Handles the `/about` route.
   * @param req The HTTP request object.
   * @param res The HTTP response object.
   */
  public about(req: Request, res: Response): void {
    res.send('About this API');
  }
}