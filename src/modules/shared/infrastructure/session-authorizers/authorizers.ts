import { AuthorizerFunction, Session } from 'session-manager-express';

export const authorizers: AuthorizerFunction[] = [
  (session: Session) => {
    if (session.user) {
      return {
        valid: true
      };
    }
    return {
      error: new Error('Invalid session: session user not found'),
      valid: false
    };
  }
];
