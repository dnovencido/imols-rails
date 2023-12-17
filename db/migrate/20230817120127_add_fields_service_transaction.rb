class AddFieldsServiceTransaction < ActiveRecord::Migration[7.0]
  def change
    add_column :service_transactions, :service_details, :json
    add_column :service_transactions, :applicant_details, :json
    add_column :service_transactions, :particulars, :json
    add_column :service_transactions, :declaration, :integer
  end
end
