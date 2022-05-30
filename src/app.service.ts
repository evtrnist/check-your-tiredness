import { Injectable } from '@nestjs/common';
import { Hears, Help, On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { UserService } from '@app/database/entities/user/user.service';

@Update()
@Injectable()
export class AppService {
  constructor(private userService: UserService) {}
  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  @Start()
  async startCommand(ctx: Context) {
    const users = await this.userService.getUsers();
    const hasUser = users.find((user) => user.id === ctx.from.id);
    console.log(users);
    if (hasUser) {
      await ctx.reply(`Я тебя знаю, ${ctx.from.id}`);
    } else {
      await ctx.reply(`Ты ктоooo, ${ctx.from.id}`);
      await this.userService.addUser({
        id: ctx.from.id,
        name: ctx.from.first_name,
      });
    }
  }

  @Help()
  async helpCommand(ctx: Context) {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async onSticker(ctx: Context) {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hearsHi(ctx: Context) {
    await ctx.reply('Hey there');
  }
}
