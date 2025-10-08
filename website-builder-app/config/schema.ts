import { integer, pgTable, varchar, timestamp,json } from "drizzle-orm/pg-core";
import { projectCompilationEventsSubscribe } from "next/dist/build/swc/generated-native";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().default(2)
});

export const projectTable = pgTable('projects', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId : varchar(),
  createdBy: varchar().references(() => usersTable.email),
  createdOn: timestamp().defaultNow().notNull()
})


export const frameTable = pgTable('frames', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  frameId : varchar(),
  projectId: varchar().references(() => projectTable.projectId),
  createdOn: timestamp().defaultNow(),
})


export const chatTable = pgTable('chats', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  chatMessage : json(),
  createdBy: varchar().references(() => usersTable.email),
  createdOn: timestamp().defaultNow(),
})