import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  Platform: "com.eliteDev.Aora99",
  projectId: "66bdddd10004611fe29b",
  databaseId: "66bde0f30031d8b1ab66",
  usersDB_Id: "66bde17c00011df07c7f",
  videosDB_Id: "66bde21000394d7cad57",
  storageId: "66bde6fc000419d5b4f8",
};

const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.Platform); // Your application ID (Platform) or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const signup = async (email, password, username) => {
  // Register User
  try {
    const newAcct = account.create(ID.unique(), email, password, username);

    if (!newAcct) throw Error;
    const avatarUrl = avatars.getInitials(username);

    await login(email, password);
    
    const newUser = await databases.createDocument(
      config.databaseId,
      config.usersDB_Id,
      ID.unique(),
      {
        accountId: newAcct.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;

  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
  } catch (error) {
    console.log(error);
  }
};
