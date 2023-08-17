class Form < ApplicationRecord
    belongs_to :category

    enum form_type: [ :permit, :license, :certificate ]
end