const{isFunctionTypeNode:isFunctionTypeNode}=require("typescript");var PreFlopRange=require("./range").PreFlopRange,Hand=require("pokersolver").Hand;module.exports=function(){var n=new PreFlopRange("AA"),e=new PreFlopRange("KK+"),s=new PreFlopRange("JJ+"),a=new PreFlopRange("TT+, AKs"),o=new PreFlopRange("99+, AJs+, KQs, AKo"),r=new PreFlopRange("77+, A9s+, KTs+, QJs, AJo+, KQo"),t=new PreFlopRange("55+, A3s+, K7s+, Q8s+, J9s+, T9s, A9o+, KTo+, QJo");new PreFlopRange("44+, A2s+, K2s+, Q6s+, J7s+, T7s+, 98s, A7o+, K9o+, Q9o+, JTo"),new PreFlopRange("33+, A2s+, K2s+, Q4s+, J6s+, T7s+, 97s+, 87s, A3o+, K7o+, Q8o+, J9o+, T9o"),new PreFlopRange("22+, A2s+, K2s+, Q2s+, J2s+, T5s+, 96s+, 86s+, 75s+, A2o+, K5o+, Q7o+, J8o+, T8o+"),new PreFlopRange("22+, A2s+, K2s+, Q2s+, J2s+, T2s+, 92s+, 84s+, 73s+, 64s+, 53s+, A2o+, K2o+, Q4o+, J6o+, T7o+, 97o+, 87o"),new PreFlopRange("22+, A2s+, K2s+, Q2s+, J2s+, T2s+, 92s+, 82s+, 72s+, 62s+, 52s+, 42s+, 32s, A2o+, K2o+, Q2o+, J3o+, T5o+, 95o+, 86o+, 75o+, 65o");return{update:function(c){if("complete"!==c.state){if(function(n){return Math.floor(2*n.self.chips/(l(n)+i(n)))}(c)<2)return c.self.chips;if("pre-flop"===c.state){if(n.isHandInRange(c.self.cards))return c.self.chips;if(c.betting.call===c.self.blind){if(function(n){return n.self.blind===l(n)}(c))return r.isHandInRange(c.self.cards)?c.betting.raise:c.betting.call;if(function(n){return n.self.blind===i(n)}(c))return t.isHandInRange(c.self.cards)?c.betting.raise:c.betting.call}var d=function(n){return n.betting.call/i(n)}(c);return e.isHandInRange(c.self.cards)&&d<=10?c.betting.call:s.isHandInRange(c.self.cards)&&d<=5?c.betting.call:a.isHandInRange(c.self.cards)&&d<=3?c.betting.call:o.isHandInRange(c.self.cards)&&d<=2?c.betting.call:0}var g;return"flop"===c.state?(g=Hand.solve(c.self.cards.concat(c.community))).rank>2?c.betting.raise:2===g.rank?c.betting.call:0:"turn"===c.state?(g=Hand.solve(c.self.cards.concat(c.community))).rank>3?c.betting.raise:g.rank>2?c.betting.call:0:(g=Hand.solve(c.self.cards.concat(c.community))).rank>4?c.betting.raise:g.rank>2?c.betting.call:0}},info:{name:"TЯ00lz",email:"trba@netcompany.com",btcWallet:""}};function l(n){var e,s;return n.players.forEach(n=>{void 0===e&&n.blind>0?e=n.blind:n.blind>0&&(s=n.blind)}),e<s?e:s}function i(n){var e,s;return n.players.forEach(n=>{void 0===e&&n.blind>0?e=n.blind:n.blind>0&&(s=n.blind)}),e>s?e:s}};