import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseAudit } from 'src/common/base-audit.entity';

@Schema({ timestamps: true })
export class User extends BaseAudit {
  @Prop({ required: true })
  email: string;

  @Prop()
  name: string;

  @Prop()
  games_played: number;

  @Prop()
  games_won: number;
}
export const UsersSchema = SchemaFactory.createForClass(User);
