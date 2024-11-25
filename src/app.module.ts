import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PageModule } from './page/page.module';

@Module({
  imports: [UserModule, PageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
