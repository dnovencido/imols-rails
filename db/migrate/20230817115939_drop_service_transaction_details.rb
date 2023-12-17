class DropServiceTransactionDetails < ActiveRecord::Migration[7.0]
  def change
    drop_table :service_transaction_details
  end
end
