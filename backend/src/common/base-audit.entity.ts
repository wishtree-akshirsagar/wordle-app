import { Prop, Schema } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchama, Types } from 'mongoose';

@Schema()
export abstract class BaseAudit extends Document {
  @Prop({ type: MongooseSchama.Types.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;

  @Prop()
  isDeleted: boolean;

  @Prop({ type: MongooseSchama.Types.ObjectId, ref: 'User' })
  deletedBy: Types.ObjectId;

  @Prop({ type: MongooseSchama.Types.ObjectId, ref: 'User' })
  updatedBy: Types.ObjectId;
}
