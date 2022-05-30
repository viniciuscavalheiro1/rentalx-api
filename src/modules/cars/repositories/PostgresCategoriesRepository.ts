import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


class PostgresCategoriesRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    list(): Category[] {
        return null;
    }
    create( { name, description }: ICreateCategoryDTO): void {
        throw new Error("Method not implemented.");
    }

}


export { PostgresCategoriesRepository };