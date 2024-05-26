import { text } from "stream/consumers";

export default function InputComponent(props:{type?:string, name: string, placeholder:string, className:string}) {
    return(
        <div className="text_area">
            <input
                type={props.type ?? "text"}
                name= {props.name}
                placeholder={props.placeholder}
                className={props.className}
            />
        </div>
    );
}