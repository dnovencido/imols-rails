class CreateForms < ActiveRecord::Migration[7.0]
  def change
    create_table :forms do |t|
      t.integer :category_id
      t.string :name
      t.integer :form_type
      t.timestamps
    end
  end
end
