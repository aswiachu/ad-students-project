import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LiquidFireController extends Controller {
    @tracked leftNumber = 0;
    @tracked rightNumber = 0;
    @tracked upNumber = 0;
    @tracked downNumber = 0;
    @tracked fadeNumber = 0;
    @tracked scaleNumber = 0;

    randomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
    constructor() {
        super(...arguments);
        setInterval(() => {
            this.leftNumber = this.randomNumber();
            this.rightNumber = this.randomNumber();
            this.upNumber = this.randomNumber();
            this.downNumber = this.randomNumber();
            this.fadeNumber = this.randomNumber();
            this.scaleNumber = this.randomNumber();
        }, 1000)
    }
}