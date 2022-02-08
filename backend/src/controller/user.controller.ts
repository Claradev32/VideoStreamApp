import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { User } from '../model/user.schema';
import { UserService } from '../service/user.service';
import { JwtService } from '@nestjs/jwt';

@Controller('/api/v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Post('/signup')
  async SignUp(@Res() response, @Body() user: User) {
    console.log(user);
    const newUSer = await this.userService.signUp(user);
    return response.status(HttpStatus.CREATED).json({
      newUSer,
    });
  }

  @Post('/signin')
  async SignIn(@Res() response, @Body() user: User) {
    const token = await this.userService.signIn(user, this.jwtService);
    return response.status(HttpStatus.OK).json(token);
  }
}
