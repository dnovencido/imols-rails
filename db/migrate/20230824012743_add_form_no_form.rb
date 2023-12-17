class AddFormNoForm < ActiveRecord::Migration[7.0]
  def change
    add_column :forms, :form_num, :string
  end
end
