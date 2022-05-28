import { Injectable } from '@nestjs/common';
import { Hears, Help, On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  @Start()
  async startCommand(ctx: Context) {
    const hasUser = false;
    // (await this.userService.getUsers()).find(
    //   (user) => user.id === ctx.from.id,
    // );

    if (hasUser) {
      await ctx.reply(`Я тебя знаю, ${ctx.from.id}`);
    } else {
      await ctx.reply(`Ты кто, ${ctx.from.id}`);
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
