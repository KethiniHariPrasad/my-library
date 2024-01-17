"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const react_1 = __importDefault(require("react"));
require("./Card.css");
function Card({ img, title, children, }) {
    return (<article data-card>
    	<img data-card-img src={img.src} alt={img.alt}/>
   	 <h2>{title}</h2>
   	 {children}
      </article>);
}
exports.Card = Card;
