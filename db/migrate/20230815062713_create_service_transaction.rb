class CreateServiceTransaction < ActiveRecord::Migration[7.0]
  def change
    create_table :service_transactions do |t|
      t.integer :user_id
      t.integer :category_id
      t.timestamps
    end
  end
end
