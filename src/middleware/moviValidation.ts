import { body } from "express-validator";

export const movieCreateValidation = () => {

    return [
        body("title")
            .isString()
            .withMessage("O nome e obrigatorio")
            .isLength({min: 5})
            .withMessage("")
    ]

}