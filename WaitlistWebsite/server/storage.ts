import { db } from "./db";
import { 
  waitlist, contacts,
  type Waitlist, type InsertWaitlist,
  type Contact, type InsertContact 
} from "@shared/schema";

export interface IStorage {
  addToWaitlist(entry: InsertWaitlist): Promise<Waitlist>;
  getWaitlistCount(): Promise<number>;
  submitContact(entry: InsertContact): Promise<Contact>;
}

export class DatabaseStorage implements IStorage {
  async addToWaitlist(entry: InsertWaitlist): Promise<Waitlist> {
    const [newEntry] = await db.insert(waitlist).values(entry).returning();
    return newEntry;
  }

  async getWaitlistCount(): Promise<number> {
    const result = await db.select({ count: waitlist.id }).from(waitlist);
    return result.length;
  }

  async submitContact(entry: InsertContact): Promise<Contact> {
    const [newContact] = await db.insert(contacts).values(entry).returning();
    return newContact;
  }
}

export const storage = new DatabaseStorage();