import { getModelForClass, mongoose, prop } from 'mongo-connect-provider';

class User {
  _id?: mongoose.Schema.Types.ObjectId;

  @prop({ type: String, unique: true, index: true })
  email: string;

  @prop({ type: String })
  firstName: string;

  @prop({ type: String })
  lastName: string;

  @prop({ type: String })
  password: string;

  @prop({ type: String })
  userName: string;
}

const UserModel = getModelForClass(User);
export default UserModel;
