class Category < ApplicationRecord
    belongs_to :service
    has_one :form
    alias_attribute :category_description, :description
    alias_attribute :category_code, :code
end