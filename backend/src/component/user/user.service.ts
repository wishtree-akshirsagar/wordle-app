import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UserProfileDto } from './dto/user-profile.dto';
import { Profile } from './entities/profile.entity';
import { User } from './entities/user.entity';

const dictionary = [
  {
    word: 'agent',
    meaning: 'a person or business authorized to act on another behalf:',
    length: 5,
    usedAt: '',
  },
  {
    word: 'above',
    meaning: 'in or to a higher place than, over:',
    length: 5,
    usedAt: '',
  },
  {
    word: 'adopt',
    meaning:
      "to choose or take as one's own, make one's own by selection or assent:",
    length: 5,
    usedAt: '',
  },
  {
    word: 'album',
    meaning:
      'a bound or loose-leaf book consisting of blank pages, pockets, envelopes, etc., for storing or displaying photographs, stamps, or the like, or for collecting autographs.',
    length: 5,
    usedAt: '',
  },
  {
    word: 'beach',
    meaning: 'an expanse of sand or pebbles along a shore.',
    length: 5,
    usedAt: '',
  },
  {
    word: 'blink',
    meaning:
      'to open and close the eye, especially involuntarily, wink rapidly and repeatedly.',
    length: 5,
    usedAt: '',
  },
  {
    word: 'cable',
    meaning:
      'a very strong rope made of strands of metal wire, as used to support cable cars or suspension bridges.',
    length: 5,
    usedAt: '',
  },
  {
    word: 'cabin',
    meaning:
      'an enclosed space for more or less temporary occupancy, as the living quarters in a trailer or the passenger space in a cable car.',
    length: 5,
    usedAt: '',
  },
  {
    word: 'candy',
    meaning:
      'any of a variety of confections made with sugar, syrup, etc., often combined with chocolate, fruit, nuts, etc.',
    length: 5,
    usedAt: '',
  },
  {
    word: 'dance',
    meaning:
      "to move one's feet or body, or both, rhythmically in a pattern of steps, especially to the accompaniment of music.",
    length: 5,
    usedAt: '',
  },
  {
    word: 'debug',
    meaning: 'to detect and remove defects or errors from.',
    length: 5,
    usedAt: '',
  },
  {
    word: 'doubt',
    meaning:
      'to be uncertain about, consider questionable or unlikely, hesitate to believe:.',
    length: 5,
    usedAt: '',
  },
  {
    word: 'eager',
    meaning: 'keen or ardent in desire or feeling, impatiently longing:',
    length: 5,
    usedAt: '',
  },
  {
    word: 'empty',
    meaning:
      'containing nothing, having none of the usual or appropriate contents:',
    length: 5,
    usedAt: '',
  },
  {
    word: 'equal',
    meaning:
      'a person or thing that is equal to another, as in quantity, degree, value, rank, or ability.',
    length: 5,
    usedAt: '',
  },
  {
    word: 'floor',
    meaning:
      'a continuous, supporting surface extending horizontally throughout a building, having a number of rooms, apartments, or the like, and constituting one level or stage in the structure, story.',
    length: 5,
    usedAt: '',
  },
];
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) public Users: Model<User>,
    @InjectModel(Profile.name) public Progress: Model<Profile>,
  ) {}

  async checkAndGet(email: any) {
    let user = await this.Users.findOne({ email: email }).exec();
    if (!user) {
      const newUser = new this.Users({
        email: email,
        games_played: 0,
        games_won: 0,
      });
      newUser.save();
      user = newUser;
    }
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    let progress = await this.Progress.findOne({
      email: user.email,
      createdAt: date,
    }).exec();
    if (!progress) {
      const word = dictionary[Math.floor(Math.random() * dictionary.length)];
      progress = new this.Progress({
        email: user.email,
        word: word.word,
        wordMeaning: word.meaning,
        isWon: false,
        createdAt: date,
        attempts: [],
      });
      await progress.save();
    }
    console.log('returned');
    return new UserProfileDto(user, progress);
  }

  async updateProgress(userProgress: UpdateProfileDto, email: string) {
    console.log('updateProgress');
    const date = new Date();
    let user = await this.Users.findOne({ email: email }).exec();
    if (!user) throw new NotFoundException();
    date.setHours(0, 0, 0, 0);
    const progress = await this.Progress.findOne({
      email: email,
      createdAt: date,
    }).exec();
    if (!progress) throw new NotFoundException();
    progress.isWon = progress.word == userProgress.attemptedWord;
    progress.attempts = userProgress.attempts;
    await progress.save();
    return new UserProfileDto(user, progress);
  }
}
