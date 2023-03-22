/**
 * Bữa học cuối cùng - Advance type typescripts
 */
// Union Type
let margin: string | number;
// Object Type
let padding: { top: string; bottom: string };
padding = { top: "10px", bottom: "10px" };

let player: { name: string; age: number; email: string };
player = { name: "hieu", age: 12, email: "something@gmail.com" };

// Function Type
function add(a: string, b: string): string {
    return a + b;
}
add("hieu", "minh");

// Generic Type
function show<T>(a: T): T {
    return a;
}
show<number>(3);
show<string>("hieu");

// Utility Types
// Partial làm cho các thuộc tính bên trong object chuyển sang thành optinal
type Users = { name: string; age: number; email: string };

interface IUsers {
    name: string;
    age: string;
    email: string;
}

let users: Partial<Users>;
let users2: Users;
let user3: Pick<Users, "name" | "age">;
users = { name: "hieu", age: 18 };
users2 = { name: "hieu", age: 18, email: "hieu@gmail.com" };
user3 = { name: "hieu", age: 15 };