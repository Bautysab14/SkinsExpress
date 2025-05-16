-- Function to handle the purchase of a skin
CREATE OR REPLACE FUNCTION purchase_skin(
  p_inventory_id UUID,
  p_buyer_id UUID,
  p_seller_id UUID,
  p_price DECIMAL(10, 2),
  p_skin_id UUID
) RETURNS BOOLEAN AS $$
DECLARE
  v_buyer_balance DECIMAL(10, 2);
  v_new_inventory_id UUID;
BEGIN
  -- Check if the buyer has enough balance
  SELECT balance INTO v_buyer_balance FROM users WHERE id = p_buyer_id;
  
  IF v_buyer_balance < p_price THEN
    RETURN FALSE;
  END IF;
  
  -- Begin transaction
  BEGIN
    -- Update the buyer's balance
    UPDATE users SET balance = balance - p_price WHERE id = p_buyer_id;
    
    -- Update the seller's balance
    UPDATE users SET balance = balance + p_price WHERE id = p_seller_id;
    
    -- Update the inventory item to not be for sale
    UPDATE inventory 
    SET is_for_sale = FALSE, asking_price = NULL, user_id = p_buyer_id
    WHERE id = p_inventory_id;
    
    -- Create a transaction record
    INSERT INTO transactions (buyer_id, seller_id, inventory_id, amount)
    VALUES (p_buyer_id, p_seller_id, p_inventory_id, p_price);
    
    RETURN TRUE;
  EXCEPTION
    WHEN OTHERS THEN
      RAISE NOTICE 'Error in purchase transaction: %', SQLERRM;
      RETURN FALSE;
  END;
END;
$$ LANGUAGE plpgsql;
