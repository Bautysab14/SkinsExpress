export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      inventory: {
        Row: {
          id: string
          user_id: string
          skin_id: string
          is_for_sale: boolean
          asking_price: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          skin_id: string
          is_for_sale?: boolean
          asking_price?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          skin_id?: string
          is_for_sale?: boolean
          asking_price?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: number
          ticket_id: number
          sender: string
          content: string
          created_at: string
        }
        Insert: {
          id?: number
          ticket_id: number
          sender: string
          content: string
          created_at?: string
        }
        Update: {
          id?: number
          ticket_id?: number
          sender?: string
          content?: string
          created_at?: string
        }
      }
      skins: {
        Row: {
          id: string
          name: string
          description: string | null
          image_url: string | null
          wear: number | null
          float_value: number | null
          rarity: string | null
          type: string | null
          weapon: string | null
          market_price: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          image_url?: string | null
          wear?: number | null
          float_value?: number | null
          rarity?: string | null
          type?: string | null
          weapon?: string | null
          market_price?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          image_url?: string | null
          wear?: number | null
          float_value?: number | null
          rarity?: string | null
          type?: string | null
          weapon?: string | null
          market_price?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      tickets: {
        Row: {
          id: number
          title: string
          status: "pending" | "in-progress" | "completed"
          type: string
          message: string | null
          skin: string | null
          steam_id: string | null
          steam_name: string | null
          created_at: string
          user_id: string | null
        }
        Insert: {
          id?: number
          title: string
          status: "pending" | "in-progress" | "completed"
          type: string
          message?: string | null
          skin?: string | null
          steam_id?: string | null
          steam_name?: string | null
          created_at?: string
          user_id?: string | null
        }
        Update: {
          id?: number
          title?: string
          status?: "pending" | "in-progress" | "completed"
          type?: string
          message?: string | null
          skin?: string | null
          steam_id?: string | null
          steam_name?: string | null
          created_at?: string
          user_id?: string | null
        }
      }
      transactions: {
        Row: {
          id: string
          buyer_id: string | null
          seller_id: string | null
          inventory_id: string | null
          amount: number
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          buyer_id?: string | null
          seller_id?: string | null
          inventory_id?: string | null
          amount: number
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          buyer_id?: string | null
          seller_id?: string | null
          inventory_id?: string | null
          amount?: number
          status?: string
          created_at?: string
        }
      }
      users: {
        Row: {
          id: string
          steamid: string
          username: string
          avatar_url: string | null
          balance: number
          is_admin: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          steamid: string
          username: string
          avatar_url?: string | null
          balance?: number
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          steamid?: string
          username?: string
          avatar_url?: string | null
          balance?: number
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Functions: {
      purchase_skin: {
        Args: {
          p_inventory_id: string
          p_buyer_id: string
          p_seller_id: string
          p_price: number
          p_skin_id: string
        }
        Returns: boolean
      }
    }
  }
}
