class CreateApplicationType < ActiveRecord::Migration[7.0]
  def change
    create_table :application_types do |t|
      t.string :name
      t.string :code
      t.timestamps
    end
  end
end
