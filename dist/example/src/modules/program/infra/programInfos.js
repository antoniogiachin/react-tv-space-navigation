"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrograms = exports.programInfos = void 0;
const rabbit1_png_1 = __importDefault(require("../assets/rabbit1.png"));
const rabbit2_png_1 = __importDefault(require("../assets/rabbit2.png"));
const rabbit3_png_1 = __importDefault(require("../assets/rabbit3.png"));
const rabbit4_png_1 = __importDefault(require("../assets/rabbit4.png"));
const rabbit5_png_1 = __importDefault(require("../assets/rabbit5.png"));
const rabbit6_png_1 = __importDefault(require("../assets/rabbit6.png"));
const rabbit7_png_1 = __importDefault(require("../assets/rabbit7.png"));
const rabbit8_png_1 = __importDefault(require("../assets/rabbit8.png"));
const rabbit9_png_1 = __importDefault(require("../assets/rabbit9.png"));
const rabbit10_png_1 = __importDefault(require("../assets/rabbit10.png"));
const rabbit11_png_1 = __importDefault(require("../assets/rabbit11.png"));
const rabbit12_png_1 = __importDefault(require("../assets/rabbit12.png"));
const rabbit13_png_1 = __importDefault(require("../assets/rabbit13.png"));
const rabbit14_png_1 = __importDefault(require("../assets/rabbit14.png"));
const rabbit15_png_1 = __importDefault(require("../assets/rabbit15.png"));
const rabbit16_png_1 = __importDefault(require("../assets/rabbit16.png"));
const rabbit17_png_1 = __importDefault(require("../assets/rabbit17.png"));
const rabbit18_png_1 = __importDefault(require("../assets/rabbit18.png"));
const rabbit19_png_1 = __importDefault(require("../assets/rabbit19.png"));
const rabbit20_png_1 = __importDefault(require("../assets/rabbit20.png"));
const rabbit21_png_1 = __importDefault(require("../assets/rabbit21.png"));
const rabbit22_png_1 = __importDefault(require("../assets/rabbit22.png"));
const rabbit23_png_1 = __importDefault(require("../assets/rabbit23.png"));
const rabbit24_png_1 = __importDefault(require("../assets/rabbit24.png"));
const rabbit25_png_1 = __importDefault(require("../assets/rabbit25.png"));
exports.programInfos = [
    {
        id: '1',
        title: 'Program 1',
        image: rabbit1_png_1.default,
        description: 'Program 1 description',
    },
    {
        id: '2',
        title: 'Program 2',
        image: rabbit2_png_1.default,
        description: 'Program 2 description',
    },
    {
        id: '3',
        title: 'Program 3',
        image: rabbit3_png_1.default,
        description: 'Program 3 description',
    },
    {
        id: '4',
        title: 'Program 4',
        image: rabbit4_png_1.default,
        description: 'Program 4 description',
    },
    {
        id: '5',
        title: 'Program 5',
        image: rabbit5_png_1.default,
        description: 'Program 5 description',
    },
    {
        id: '6',
        title: 'Program 6',
        image: rabbit6_png_1.default,
        description: 'Program 6 description',
    },
    {
        id: '7',
        title: 'Program 7',
        image: rabbit7_png_1.default,
        description: 'Program 7 description',
    },
    {
        id: '8',
        title: 'Program 8',
        image: rabbit8_png_1.default,
        description: 'Program 8 description',
    },
    {
        id: '9',
        title: 'Program 9',
        image: rabbit9_png_1.default,
        description: 'Program 9 description',
    },
    {
        id: '10',
        title: 'Program 10',
        image: rabbit10_png_1.default,
        description: 'Program 10 description',
    },
    {
        id: '11',
        title: 'Program 11',
        image: rabbit11_png_1.default,
        description: 'Program 11 description',
    },
    {
        id: '12',
        title: 'Program 12',
        image: rabbit12_png_1.default,
        description: 'Program 12 description',
    },
    {
        id: '13',
        title: 'Program 13',
        image: rabbit13_png_1.default,
        description: 'Program 13 description',
    },
    {
        id: '14',
        title: 'Program 14',
        image: rabbit14_png_1.default,
        description: 'Program 14 description',
    },
    {
        id: '15',
        title: 'Program 15',
        image: rabbit15_png_1.default,
        description: 'Program 15 description',
    },
    {
        id: '16',
        title: 'Program 16',
        image: rabbit16_png_1.default,
        description: 'Program 16 description',
    },
    {
        id: '17',
        title: 'Program 17',
        image: rabbit17_png_1.default,
        description: 'Program 17 description',
    },
    {
        id: '18',
        title: 'Program 18',
        image: rabbit18_png_1.default,
        description: 'Program 18 description',
    },
    {
        id: '19',
        title: 'Program 19',
        image: rabbit19_png_1.default,
        description: 'Program 19 description',
    },
    {
        id: '20',
        title: 'Program 20',
        image: rabbit20_png_1.default,
        description: 'Program 20 description',
    },
    {
        id: '21',
        title: 'Program 21',
        image: rabbit21_png_1.default,
        description: 'Program 21 description',
    },
    {
        id: '22',
        title: 'Program 22',
        image: rabbit22_png_1.default,
        description: 'Program 22 description',
    },
    {
        id: '23',
        title: 'Program 23',
        image: rabbit23_png_1.default,
        description: 'Program 23 description',
    },
    {
        id: '24',
        title: 'Program 24',
        image: rabbit24_png_1.default,
        description: 'Program 24 description',
    },
    {
        id: '25',
        title: 'Program 25',
        image: rabbit25_png_1.default,
        description: 'Program 25 description',
    },
];
const shuffleArray = (array) => {
    const arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arrayCopy[i];
        arrayCopy[i] = arrayCopy[j];
        arrayCopy[j] = temp;
    }
    return arrayCopy;
};
const getPrograms = (listSize) => {
    if (!listSize)
        return shuffleArray(exports.programInfos);
    const programInfosWithCustomSize = [];
    for (let i = 0; i < listSize; i++) {
        programInfosWithCustomSize.push(exports.programInfos[Math.floor(Math.random() * (exports.programInfos.length - 1))]);
    }
    return programInfosWithCustomSize;
};
exports.getPrograms = getPrograms;
//# sourceMappingURL=programInfos.js.map