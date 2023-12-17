class ServiceTransaction < ApplicationRecord
    belongs_to :category
    has_one :form, through: :category
end