import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseAudit } from 'src/common/base-audit.entity';

@Schema({ timestamps: true })
export class Profile {
  @Prop({ required: true })
  email: string;

  @Prop()
  word: string;

  @Prop()
  attempts: string[];

  @Prop()
  isWon: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  wordMeaning: string;
}
export const ProfilesSchema = SchemaFactory.createForClass(Profile);
