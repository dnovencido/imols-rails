class AddDescriptionForm < ActiveRecord::Migration[7.0]
  def change
    add_column :forms, :title, :string
  end
end
