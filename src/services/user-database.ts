import type { SupabaseClient } from '@supabase/supabase-js';

import type { Database } from '@/types/database';

type SupabaseClientInstance = SupabaseClient<Database, 'public'>;

export class UserDatabase {
  private databaseInstance: SupabaseClientInstance;

  constructor(supabaseInstance: SupabaseClientInstance) {
    this.databaseInstance = supabaseInstance;
  }

  async checkUserName(userName: string) {
    return this.databaseInstance
      .from('profiles')
      .select('user_name')
      .eq('user_name', userName);
  }

  async storeUserName(userName: string, userID: string) {
    return this.databaseInstance
      .from('profiles')
      .update({ user_name: userName })
      .eq('user_id', userID);
  }
}
