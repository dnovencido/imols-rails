class CreateUserProfile < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.integer :user_id
      t.string :company
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :address
      t.string :contact
      t.timestamps
    end
  end
end
