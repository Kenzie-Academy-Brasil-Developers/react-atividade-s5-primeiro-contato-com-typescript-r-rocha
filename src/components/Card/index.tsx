import { InputHTMLAttributes } from "react";

interface CardProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    age: number;
    hobby: string;
}

export const Card = ({ name, age, hobby }: CardProps) => (
    <div className="Card">
        <div>Name: {name}</div>
        <div>Idade: {age}</div>
        <div>Hobby: {hobby}</div>
    </div>
)