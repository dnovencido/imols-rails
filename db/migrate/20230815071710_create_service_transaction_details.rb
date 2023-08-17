class CreateServiceTransactionDetails < ActiveRecord::Migration[7.0]
  def change
    create_table :service_transaction_details do |t|
      t.integer :service_transaction_id
      t.json :service_details
      t.json :applicant_details
      t.json :particulars
      t.integer :declaration
      t.timestamps
    end
  end
end
