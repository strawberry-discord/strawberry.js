import { createBrotliCompress } from "zlib";

const strawberryBots: StrawberryBot[] = [];

export function Bot(target: StrawberryBot) {
    strawberryBots.push(target);
}

export class StrawberryBot {

}

export function createBot(): StrawberryBot {
    const bot = new StrawberryBot();
    strawberryBots.push(bot);
    return bot;
}
