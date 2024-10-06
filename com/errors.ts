class CustomError extends Error {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}

class ContentError extends CustomError {}
class MatchError extends CustomError {}
class DuplicityError extends CustomError {}
class SystemError extends CustomError {}
class CredentialsError extends CustomError {}
class NotFoundError extends CustomError {}

export { ContentError, MatchError, DuplicityError, SystemError, CredentialsError, NotFoundError }

const errors = {
  ContentError,
  MatchError,
  DuplicityError,
  SystemError,
  CredentialsError,
  NotFoundError,
}

export default errors
