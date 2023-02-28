class GymWithClientsSerializer < ActiveModel::Serializer
  attributes :id, :name, :address
  has_many :clients
  # not in deliverables
end
