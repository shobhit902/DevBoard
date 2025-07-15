import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
  .setProject("687140a80013b360f037"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
