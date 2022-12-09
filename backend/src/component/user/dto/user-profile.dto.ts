import { Profile } from '../entities/profile.entity';
import { User } from '../entities/user.entity';

export class UserProfileDto {
  email: string;

  name: string;

  games_played: number;

  games_won: number;

  isWon: boolean;

  word: string;

  attemptedWord: string;

  attempts: string[];

  wordMeaning: string;

  constructor(user: User, progress: Profile) {
    this.email = user.email;
    this.name = user.name;
    this.games_played = user.games_played;
    this.games_won = user.games_won;
    this.isWon = progress.isWon;
    this.word = progress.word;
    this.attempts = progress.attempts;
    this.wordMeaning = progress.wordMeaning;
  }
}
