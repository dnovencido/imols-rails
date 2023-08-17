class Service < ApplicationRecord
    has_many :categories, dependent: :destroy
    accepts_nested_attributes_for :categories

    validates :name, presence: true
    validates :code, presence: true
    validates :description, presence: true
end
