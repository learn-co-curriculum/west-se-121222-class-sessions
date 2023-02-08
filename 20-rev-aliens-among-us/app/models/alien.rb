class Alien < ActiveRecord::Base

    def self.most_frequent_visitor
        # compare the count of visitations of each alien, return the alien with the max
        self.all.max_by {|alien| alien.visitations.size }
    end

    def self.average_light_years_to_home_planet
        # add all of the distances and divide by sume of # of aliens
        # self.all.sum{|alien| alien.light_years_to_home_planet} / self.all.length.to_f # all Ruby
        # self.sum(:light_years_to_home_planet) / self.count.to_f # all AR
        self.average(:light_years_to_home_planet).to_f # all AR but even shorter
    end

    has_many :visitations
    has_many :earthlings, through: :visitations

    def visit(earthling)
        # Visitation.create(date: Date.new, earthling: earthling, alien_id: self.id)
        self.visitations.create(date: Date.today, earthling: earthling)
    end

    def total_light_years_traveled
        # num of visitations for and alien * distance to home planet * 2
        self.light_years_to_home_planet * self.visitations.length * 2
    end

end
