// tsc app.ts
// tsc -w app.ts

const addButton = document.querySelector(".button")! as HTMLInputElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

addButton.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

// ========================================================

// enum Load {
//   LOADING,
//   READY,
// }
// const page = {
//   load: Load.LOADING,
// };
// if (page.load === Load.LOADING) {
//   console.log("loading...");
// }
// if (page.load === Load.READY) {
//   console.log("ready!");
// }

// let union: string | number;
// union = 'text';
// union = 10;

// let btn: 'enable' | 'disable';

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type User = {
//   name: string;
//   startDate: Date;
// };

// type AdminUser = Admin & User;

// const person: AdminUser = {};

// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface User {
//   name: string;
//   startDate: Date;
// }

// // type AdminUser = Admin & User;

// interface AdminUser extends Admin, User {}

// const person: AdminUser = {
//   name: "name",
//   privileges: ["name"],
//   startDate: new Date(),
// };

// =====================================================================

// type ComplexType = string | number;
// function combine(a: ComplexType, b: ComplexType) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// interface Admin {
//   name: string;
//   privileges: string[];
// }
// interface User {
//   name: string;
//   startDate: Date;
// }
// type AdminOrUser = Admin | User;
// function showField(el: AdminOrUser) {
//   if ("startDate" in el) {
//     console.log(el.startDate);
//   }
//   if ("privileges" in el) {
//     console.log(el.privileges);
//   }
//   console.log(el.name);
// }

// =======================================================

// interface IHouse {
//   readonly type: string;
//   floor: number;

//   greet(phrase: string): void;
// }

// // type IHouse = {
// //   readonly type: string;
// //   floor: number;

// //   greet: (phrase: string) => void;
// // };

// interface IBuilder {
//   buildMessage(): void;
// }

// class Builder implements IHouse, IBuilder {
//   constructor(public readonly type: string, public floor: number) {
//     this.checkFloor();
//   }

//   private checkFloor() {
//     if (this.floor > 5) {
//       throw new Error("House to big");
//     }
//   }

//   public greet(phrase: string): void {
//     console.log(phrase + this.type);
//   }

//   public buildMessage(): void {
//     console.log("all right!");
//   }
// }

// abstract class House {
//   protected builder?: IBuilder;

//   public isBuilder(builder: IBuilder) {
//     this.builder = builder;
//   }

//   public abstract startBuild(): boolean;
// }

// class MyHouse extends House {
//   public startBuild(): boolean {
//     if (!this.builder) {
//       throw new Error("No building");
//     }
//     console.log("Start building");

//     this.builder.buildMessage();

//     return true;
//   }
// }

// class Guest implements IBuilder {
//   message(phrase: string) {
//     console.log(phrase);
//   }
//   public buildMessage(): void {
//     console.log("no, i am looking");
//   }
// }

// const myHouse = new MyHouse();
// const builder = new Guest();

// myHouse.isBuilder(builder);
// builder.message("what are you doing?");
// myHouse.startBuild();

// const builder = new Builder("private", 3);

// builder.greet("I will build!");
// myHouse.isBuilder(builder);
// myHouse.startBuild();
// builder.buildMessage();

// let building: IHouse;
// building = {
//   type: "private",
//   floor: 2,

//   greet(phrase: string) {
//     console.log(phrase + this.type);
//   },
// };

// building.greet("what,");

// abstract class House {
//   protected guest = false;

//   public isGuest() {
//     this.guest = true;
//   }

//   public abstract startBuild(): string;
// }

// class MyHouse extends House {
//   public startBuild(): string {
//     return "ttttttt";
//   }
// }

// class NearHouse extends House {
//   public startBuild(): string {
//     return "rrrrrrr";
//   }
// }

// const myHouse = new MyHouse();
// const nearHouse = new NearHouse();

// myHouse.isGuest();
// nearHouse.isGuest();

// console.log(myHouse.startBuild());
// console.log(nearHouse.startBuild());

// ================================================================

// class House {
//   private static apartment = 0;

//   constructor() {
//     House.apartment += 1;
//   }

//   public static isStatic() {
//     console.log("isStatic");
//   }

//   public showApartment(): void {
//     console.log(House.apartment);
//   }
// }

// const apart1 = new House();
// const apart2 = new House();
// const apart3 = new House();

// apart1.showApartment();
// apart2.showApartment();
// apart3.showApartment();

// House.isStatic();

// type AddFunc = (n1: number, n2: number) => number;
// interface AddFunc {
//   (n1: number, n2: number): number;
// }
// const foo: AddFunc = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// ============================================================

// abstract class Guy {
//   constructor(public name: string) {}
// }
// class Bad extends Guy {
//   insult() {
//     console.log("insult");
//   }
// }
// class Good extends Guy {
//   advice() {
//     console.log("advice");
//   }
// }
// const good = new Good("Slavic");
// const bad = new Bad("Anton");

// function guys(user: Guy) {
//   if (user instanceof Good) {
//     user.advice();
//   }
//   if (user instanceof Bad) {
//     user.insult();
//   }
// }

// ============================================================

// const input =<HTMLInputElement> document.getElementById("inputEmail")!;
// input.value;

// const input = document.getElementById("inputEmail") as HTMLInputElement;
// input.value;

// const input = document.getElementById("inputEmail");
// if (input) {
//   (input as HTMLInputElement).value;
// }

// const input = document.getElementById("inputEmail");
// if (input) {
//   const newInput = input as HTMLInputElement;
//   newInput.value;
// }

// ================================================================

// interface Person {
//   name: string;
//   age: number;
//   [x: string]: any;
// }

// const user: Person = {
//   age: 30,
//   name: "Max",
//   gender: "Man",
//   country: "Ukraine",
// };

// ================================================================

// interface Person {
//   name: string;
//   additionInfo?: {
//     someInfo: string;
//   };
// }

// const user: Person = {
//   name: "Max",
// };

// user?.additionInfo?.someInfo;

// ==============================================================

// const userInput = "";

// const store = userInput ?? "DEFAULT";

// console.log(store);

// ============================================

// function addSum(a: string, b: string): string;
// function addSum(a: number, b: number): number;
// function addSum(a: string | number, b: string | number) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// console.log(addSum(3, 5));
// console.log(addSum("3", "5"));

// =============================================

// let arr: Array<string | number>;
// arr = ["string", 1];

// let arr: (string | number)[];
// arr = ["string", 1];

// const promise: Promise<string> = new Promise((resolve) => {
//   resolve("string");
// });
// promise.then((data) => {
//   console.log(data);
// });

// (() => {
//   async function promiseFoo(): Promise<string> {
//     return "string1";
//   }
//   promiseFoo().then((data) => {
//     console.log(data);
//   });
// })();

// ==========================================================

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign({}, objA, objB);
// }

// type Person = {
//   name: string;
// };

// type AdditionFields = {
//   age: number;
// };

// const toMerge1 = {
//   name: "Max",
// };

// const toMerge2 = {
//   age: 21,
// };

// const merged = merge<Person, AdditionFields>(toMerge1, toMerge2);

// console.log(merged);

// ================================================================

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign({}, objA, objB);
// }

// const toMerge1 = {
//   name: "Max",
// };

// const toMerge2 = {
//   age: 21,
// };

// const merged = merge(toMerge1, toMerge2);

// console.log(merged);

// ==============================================================

// interface ILength {
//   length: number;
// }

// function getLength<T extends ILength>(str: T): number {
//   return str.length;
// }

// const obj = {
//   length: 10,
// };

// console.log(getLength("string"));
// console.log(getLength([1, 2, 3, 4]));
// console.log(getLength(obj));

// ================================================================

// function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }

// const field = extractValue({ name: "Anton" }, "name");

// console.log(field);

// ================================================================

// class DataStore<T> {
//   private data: T[] = [];

//   addItem(item: T): void {
//     this.data.push(item);
//   }

//   getItems(): T[] {
//     return this.data;
//   }
// }

// interface IPerson {
//   name: string;
// }

// const storeUsers = new DataStore<IPerson>();

// storeUsers.addItem({
//   name: "Max",
// });
// storeUsers.addItem({
//   name: "Anton",
// });

// console.log(storeUsers.getItems());

// const ageStore = new DataStore<number>();

// ageStore.addItem(21);
// ageStore.addItem(34);

// console.log(ageStore.getItems());

// ===================================================================

// interface IUser {
//   name: string;
//   age: number;
// }

// function createPerson(name: string): IUser {
//   const person: Partial<IUser> = {
//     name,
//   };

//   person.age = 21;

//   return person as IUser;
// }

// console.log(createPerson("Max"));

// ===============================================================

// interface IPerson {
//   name: string;
// }

// const obj: Readonly<IPerson> = {
//   name:'Max'
// }

// obj.name = ""

// ==============================================

// interface Page {
//   title: string;
//   annotation: string;
//   numberPage: number;
// }

// const pageAnnotation: Pick<Page, "annotation" | "numberPage"> = {
//   annotation: "Small page",
//   numberPage: 3,
// };

// console.log(pageAnnotation);

// =====================================================================

// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function AddProperty() {
//   return function (constructor: Function) {
//     console.log("addProperty");
//     constructor.prototype.modify = true;
//   };
// }

// @Logger("Logger - Controller")
// @AddProperty()
// class Controller {
//   public id = 1;
//   public modify = false;
// }

// const controller = new Controller();

// console.log("is modify?", controller.modify);

// ===========================================================

// interface IDecoration {
//   parent: string;
//   template: string;
// }

// function ControllerDecoration(config: IDecoration) {
//   return function <T extends { new (...args: any[]): { content: string } }>(
//     originalConstructor: T
//   ) {
//     return class extends originalConstructor {
//       private element: HTMLElement;
//       private parent: HTMLElement;

//       constructor(...args: any[]) {
//         super(...args);

//         this.parent = document.getElementById(config.parent)!;
//         this.element = document.createElement(config.template);

//         this.element.innerHTML = this.content;

//         this.parent.appendChild(this.element);
//       }
//     };
//   };
// }

// @ControllerDecoration({
//   parent: "app",
//   template: "H1",
// })
// class Controller {
//   public content = "My controller";
// }

// const controller = new Controller();
// const controller1 = new Controller();

// =====================================================

// function ShowParams(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("target", target);
//   console.log("name", name);
//   console.log("descriptor", descriptor);
// }

// function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const method = descriptor.value as Function;

//   return {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return method.bind(this);
//     },
//   };
// }

// class Notifier {
//   public content = "Message in class";

//   @ShowParams
//   @AutoBind
//   showMessage() {
//     console.log(this.content);
//   }
// }

// const notifier = new Notifier();

// const showMessage = notifier.showMessage;

// notifier.showMessage();
// showMessage();

// ===================================================================

// function AddTax(taxPercent: number) {
//   return function (_: any, _2: string, descriptor: PropertyDescriptor) {
//     const method = descriptor.value as Function;

//     return {
//       configurable: true,
//       enumerable: false,
//       get() {
//         return (...args: any) => {
//           const result = method.apply(this, args);

//           return result + (result / 100) * taxPercent;
//         };
//       },
//     };
//   };
// }

// class Payment {
//   @AddTax(20)
//   pay(money: number) {
//     return money;
//   }
// }

// const payment = new Payment();

// console.log(payment.pay(100));

// =======================================================

// function CheckEmail(target: any, nameMethod: string, position: number) {
//   if (!target[nameMethod].validation) {
//     target[nameMethod].validation = {};
//   }

//   Object.assign(target[nameMethod].validation, {
//     [position]: (value: string) => {
//       if (value.includes("@")) {
//         return value;
//       }
//       throw new Error("Not valid email");
//     },
//   });
// }

// function Validation(
//   _: any,
//   _2: string,
//   descriptor: PropertyDescriptor
// ): PropertyDescriptor {
//   const method = descriptor.value;

//   return {
//     configurable: true,
//     enumerable: false,

//     get() {
//       return (...args: any) => {
//         if (method.validation) {
//           args.forEach((item: string, index: number) => {
//             if (method.validation[index]) {
//               args[index] = method.validation[index](item);
//             }
//           });
//         }

//         return method.apply(this, args);
//       };
//     },
//   };
// }

// class Person {
//   @Validation
//   setEmail(@CheckEmail email: string) {
//     console.log(email);
//   }
// }

// const person = new Person();

// person.setEmail("test@test.com");
// person.setEmail("test.com");

// ============================================================

interface ValidationConfig {
  [prop: string]: {
    [validationProp: string]: string[];
  };
}

const registeredValidation: ValidationConfig = {};

function Required(target: any, propName: string) {
  registeredValidation[target.constructor.name] = {
    ...registeredValidation[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidation[target.constructor.name] = {
    ...registeredValidation[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validation(obj: any) {
  const objValidation = registeredValidation[obj.constructor.name];

  if (!objValidation) {
    return true;
  }

  let isValid = true;

  for (const prop in objValidation) {
    for (const validProp of objValidation[prop]) {
      switch (validProp) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;

        default:
          break;
      }
    }
  }

  return isValid;
}

class Person {
  @Required
  public name: string;
  @PositiveNumber
  public age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const person = new Person("Max", 21);

if (!validation(person)) {
  console.log("Not valid");
} else {
  console.log("Valid");
}
