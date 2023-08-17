class ServiceTransaction < ApplicationRecord
    has_one :service_transaction_details, dependent: :destroy
    accepts_nested_attributes_for :service_transaction_details
end