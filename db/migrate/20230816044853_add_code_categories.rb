class AddCodeCategories < ActiveRecord::Migration[7.0]
  def change
    add_column :categories, :code, :string
  end
end